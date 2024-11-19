<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Controller;

use Exception;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;
use Symfony\Component\Routing\Attribute\Route;

#[Route(defaults: ['_routeScope' => ['api']])]
class FontDownloadController extends AbstractController {
    /**
     * @var EntityRepository
     */
    private $fontRepository;

    public function __construct(EntityRepository $fontRepository) {
        $this->fontRepository = $fontRepository;
    }

    #[Route(path:'/api/_action/areanet-google-fonts/download-font', name: 'api.custom.download-font', methods: ['POST'])]
    public function fontDownload(Request $request, Context $context): JsonResponse {
        $fontData = $request->request->all();
        $path = "../custom/plugins/AreanetGoogleFontsLoader/src/Resources/public/fonts/";

        try {
            foreach($fontData['fonts'] as $fonts) {
                foreach ($fonts['files'] as $url) {
                    $fontPath = $path . basename($url);

                    if (!file_exists($fontPath)) {
                        $data = file_get_contents($url);
                        if ($data !== false) {
                            file_put_contents($fontPath, $data);
                        }
                    }
                }
            }

            $process = new Process([dirname(__DIR__, 5).'/bin/console', 'assets:install']);
            $process->run();

            if (!$process->isSuccessful()) {
                throw new ProcessFailedException($process);
            }

            $updateArray[] = [
                'id' => $fontData['id'],
                'downloaded' => true,
                'css' => $this->generateFontCss($fontData['fonts'])
            ];

            $this->fontRepository->upsert($updateArray, $context);

            $data = [
                'status' => 200,
            ];
        } catch (Exception $e) {
            $data = [
                'message' => $e->getMessage(),
                'status' => 400,
            ];
        }

        return new JsonResponse($data);
    }

    private function generateFontCss($fontsResponse) {
        $css = "";
        $path = "/bundles/areanetgooglefontsloader/fonts/";

        foreach ($fontsResponse as $font) {
            if (isset($font['family']) && isset($font['files'])) {
                $family = $font['family'];
                $files = $font['files'];

                foreach ($files as $variant => $url) {
                    $fontStyle = "normal";

                    if (strpos(strval($variant), 'italic') !== false) {
                        $fontStyle = "italic";
                        $fontWeight = str_replace('italic', '', $variant);
                    } else {
                        $fontWeight = $variant;
                    }

                    if ($fontWeight === "") {
                        $fontWeight = "400";
                    }

                    $fontPath = $path . basename($url);
                    $format = pathinfo($fontPath, PATHINFO_EXTENSION);

                    $css .= "@font-face {\n";
                    $css .= "  font-family: '{$family}';\n";
                    $css .= "  font-style: {$fontStyle};\n";
                    $css .= "  font-weight: {$fontWeight};\n";
                    $css .= "  src: url('{$fontPath}') format('{$format}');\n";
                    $css .= "}\n\n";
                }
            }
        }

        return $css;
    }
}

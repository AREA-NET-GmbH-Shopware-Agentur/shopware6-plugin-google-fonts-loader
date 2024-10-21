<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class AreanetGoogleFontsLoader extends Plugin
{
    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);

        if ($uninstallContext->keepUserData()) {
            return;
        }

        $connection = $this->container->get(Connection::class);
        $connection->executeQuery('DROP TABLE IF EXISTS `areanet_google_font_sales_channel`');
        $connection->executeQuery('DROP TABLE IF EXISTS `areanet_google_font`');
    }
}

<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsAnyFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Storefront\Event\StorefrontRenderEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class FontLoaderSubscriber implements EventSubscriberInterface
{
    private EntityRepository $fontRepository;

    public function __construct(EntityRepository $fontRepository)
    {
        $this->fontRepository = $fontRepository;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            StorefrontRenderEvent::class => 'loadFontCss',
        ];
    }

    public function loadFontCss(StorefrontRenderEvent $event): void
    {
        $css = "";
        $salesChannelId = $event->getSalesChannelContext()->getSalesChannelId();

        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('active', 1));
        $criteria->addFilter(new EqualsFilter('downloaded', 1));
        $criteria->addFilter(new EqualsFilter('salesChannels.salesChannelId', $salesChannelId));
        $criteria->addAssociation('salesChannels');

        $fonts = $this->fontRepository->search($criteria, $event->getContext());

        foreach ($fonts as $font) {
            $css .= $font->getCss()."\n";
        }

        $event->setParameter('fontLoaderCss', $css);
    }
}

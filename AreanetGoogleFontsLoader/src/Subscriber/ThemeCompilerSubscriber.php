<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Subscriber;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Storefront\Event\ThemeCompilerConcatenatedScriptsEvent;
use Shopware\Storefront\Event\ThemeCompilerConcatenatedStylesEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ThemeCompilerSubscriber implements EventSubscriberInterface
{
    private EntityRepository $repository;

    public function __construct(EntityRepository $repository)
    {
        $this->repository = $repository;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ThemeCompilerConcatenatedStylesEvent::class => 'onGetConcatenatedStyles',
            ThemeCompilerConcatenatedScriptsEvent::class => 'onGetConcatenatedScripts',
        ];
    }

    public function onGetConcatenatedStyles(ThemeCompilerConcatenatedStylesEvent $event): void
    {
        //see: https://github.com/dneustadt/DneCustomCssJs/blob/master/src/Subscriber/ThemeCompilerSubscriber.php
    }

    public function onGetConcatenatedScripts(ThemeCompilerConcatenatedScriptsEvent $event): void
    {
        //see: https://github.com/dneustadt/DneCustomCssJs/blob/master/src/Subscriber/ThemeCompilerSubscriber.php
    }
}

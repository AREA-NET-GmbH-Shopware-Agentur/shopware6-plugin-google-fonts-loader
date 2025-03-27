<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @extends EntityCollection<GoogleFontEntity>
 */
class GoogleFontCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return GoogleFontEntity::class;
    }
}

<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void add(GoogleFontEntity $entity)
 * @method void set(string $key, GoogleFontEntity $entity)
 * @method GoogleFontEntity[] getIterator()
 * @method GoogleFontEntity[] getElements()
 * @method GoogleFontEntity|null get(string $key)
 * @method GoogleFontEntity|null first()
 * @method GoogleFontEntity|null last()
 */
class GoogleFontCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return GoogleFontEntity::class;
    }
}

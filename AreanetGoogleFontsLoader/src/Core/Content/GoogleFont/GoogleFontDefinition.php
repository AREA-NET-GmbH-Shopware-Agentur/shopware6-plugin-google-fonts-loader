<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont;

use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\System\CustomEntity\Xml\Field\TextField;

class GoogleFontDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'areanet_google_font';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return GoogleFontEntity::class;
    }

    public function getCollectionClass(): string
    {
        return GoogleFontCollection::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new StringField('name', 'name')),
            (new LongTextField('config', 'config')),
            (new BoolField('active', 'active'))
        ]);
    }
}

<?php
declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont\Aggregate\GoogleFontSalesChannel;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @extends EntityCollection<GoogleFontSalesChannelEntity>
 */
#[Package('buyers-experience')]
class GoogleFontSalesChannelCollection extends EntityCollection
{
    public function getApiAlias(): string
    {
        return 'areanet_google_font_sales_channel_collection';
    }

    protected function getExpectedClass(): string
    {
        return GoogleFontSalesChannelEntity::class;
    }
}

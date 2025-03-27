<?php
declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont\Aggregate\GoogleFontSalesChannel;

use AreanetGoogleFontsLoader\Core\Content\GoogleFont\GoogleFontEntity;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;
use Shopware\Core\System\SalesChannel\SalesChannelEntity;

class GoogleFontSalesChannelEntity extends Entity
{
    use EntityIdTrait;

    /**
     * @var string
     */
    protected $areanetGoogleFontId;

    /**
     * @var string
     */
    protected $salesChannelId;

    /**
     * @var GoogleFontEntity|null
     */
    protected $areanetGoogleFont;

    /**
     * @var SalesChannelEntity|null
     */
    protected $salesChannel;

    public function getAreanetGoogleFontId(): string
    {
        return $this->areanetGoogleFontId;
    }

    public function setAreanetGoogleFontId(string $areanetGoogleFontId): void
    {
        $this->areanetGoogleFontId = $areanetGoogleFontId;
    }

    public function getSalesChannelId(): string
    {
        return $this->salesChannelId;
    }

    public function setSalesChannelId(string $salesChannelId): void
    {
        $this->salesChannelId = $salesChannelId;
    }

    public function getAreanetGoogleFont(): ?GoogleFontEntity
    {
        return $this->areanetGoogleFont;
    }

    public function setAreanetGoogleFont(?GoogleFontEntity $areanetGoogleFont): void
    {
        $this->areanetGoogleFont = $areanetGoogleFont;
    }

    public function getSalesChannel(): ?SalesChannelEntity
    {
        return $this->salesChannel;
    }

    public function setSalesChannel(?SalesChannelEntity $salesChannel): void
    {
        $this->salesChannel = $salesChannel;
    }
}
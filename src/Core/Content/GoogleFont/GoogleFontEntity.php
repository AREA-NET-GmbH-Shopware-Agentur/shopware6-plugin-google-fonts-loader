<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Core\Content\GoogleFont;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;
use Shopware\Core\System\SalesChannel\SalesChannelCollection;

class GoogleFontEntity extends Entity
{
    use EntityIdTrait;

    protected ?string $name;

    protected bool $downloaded;

    protected bool $active;

    protected string $css;

    protected ?string $type;

    /**
     * @var GoogleFontSalesChannelCollection|null
     */
    protected $salesChannels;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function isDownloaded(): bool
    {
        return $this->downloaded;
    }

    public function setDownloaded(bool $downloaded): void
    {
        $this->downloaded = $downloaded;
    }

    public function isActive(): bool
    {
        return $this->active;
    }

    public function setActive(bool $active): void
    {
        $this->active = $active;
    }

    public function getSalesChannels(): ?GoogleFontSalesChannelCollection
    {
        return $this->salesChannels;
    }

    public function setSalesChannels(?GoogleFontSalesChannelCollection $salesChannels): void
    {
        $this->salesChannels = $salesChannels;
    }

    public function getCss(): string
    {
        return $this->css;
    }

    public function setCss(string $css): void
    {
        $this->css = $css;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): void
    {
        $this->type = $type;
    }
}

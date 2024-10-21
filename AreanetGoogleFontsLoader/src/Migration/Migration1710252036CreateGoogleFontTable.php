<?php declare(strict_types=1);

namespace AreanetGoogleFontsLoader\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1710252036CreateGoogleFontTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1710252036;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
            CREATE TABLE IF NOT EXISTS `areanet_google_font` (
                `id` BINARY(16) NOT NULL,
                `name` VARCHAR(255) COLLATE utf8mb4_unicode_ci,
                `downloaded` TINYINT(1) COLLATE utf8mb4_unicode_ci,
                `active` TINYINT(1) COLLATE utf8mb4_unicode_ci,
                `css` LONGTEXT COLLATE utf8mb4_unicode_ci,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3),
                PRIMARY KEY (`id`)
            )
                ENGINE = InnoDB
                DEFAULT CHARSET = utf8mb4
                COLLATE = utf8mb4_unicode_ci;

            CREATE TABLE IF NOT EXISTS `areanet_google_font_sales_channel` (
              `id` BINARY(16) NOT NULL,
              `areanet_google_font_id` BINARY(16) NOT NULL,
              `sales_channel_id` BINARY(16) NOT NULL,
              `created_at` DATETIME(3) NOT NULL,
              `updated_at` DATETIME(3) NULL,
              PRIMARY KEY (`id`),
              INDEX `idx.areanet_google_font_sales_channel.sales_channel_id` (`sales_channel_id` ASC),
              INDEX `idx.areanet_google_font_sales_channel.areanet_google_font_id` (`areanet_google_font_id` ASC),
              CONSTRAINT `fk.areanet_google_font_sales_channel.areanet_google_font_id` FOREIGN KEY (`areanet_google_font_id`)
                REFERENCES `areanet_google_font` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
              CONSTRAINT `fk.areanet_google_font_sales_channel.sales_channel_id` FOREIGN KEY (`sales_channel_id`)
                REFERENCES `sales_channel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
            SQL;

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}

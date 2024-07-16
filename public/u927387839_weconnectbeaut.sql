-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 05, 2024 at 11:13 AM
-- Server version: 10.11.8-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u927387839_weconnectbeaut`
--

-- --------------------------------------------------------

--
-- Table structure for table `online_users`
--

CREATE TABLE `online_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `last_login` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_brand`
--

CREATE TABLE `tbl_brand` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_brand`
--

INSERT INTO `tbl_brand` (`id`, `brand`, `description`, `created_date`, `created_at`, `created_time`, `created_by`) VALUES
(1, 'Trecelmoon', '', '2024-07-04', '2024-07-04 23:26:48', '23:26:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `id` int(11) NOT NULL,
  `varient` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `img` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `category`, `img`, `description`, `created_date`, `created_time`, `created_at`, `created_by`) VALUES
(1, 'Shower Gel', 'assets/img/food/6686ebd2b1776_cherry_1080x1080.webp', '', '2024-07-04', '23:29:59', '2024-07-04 23:29:59', '8'),
(2, 'Body Scrub', 'assets/img/food/6686ebe89ef8e_Untitleddesign_8_1080x1080.webp', '', '2024-07-04', '23:30:11', '2024-07-04 23:30:11', '8'),
(3, 'Hand Cream & Body Lotion (Coming Soon)', 'assets/img/food/6686ec2216701_MarshmallowHandCreamNEW_1080x1080-300x300.webp', '', '2024-07-04', '23:30:26', '2024-07-04 23:30:26', '8'),
(4, 'Bath Salt', 'assets/img/food/6686ec3a48515_gentleflowerdreams_1080x1080.webp', '', '2024-07-04', '23:30:38', '2024-07-04 23:30:38', '8'),
(6, 'Combos', 'assets/img/food/6686f1395f989_BrazilianBundle_1080x1080.webp', 'The scent that EVERYONE is talking about! Vegan and cruelty-free, we’ve bundled together the complete range of our highly talked about scent. Deliciously hydrating with natural extracts.', '2024-07-05', '00:30:09', '2024-07-05 00:30:09', '8');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `img` text DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `brand`, `product`, `category`, `img`, `ingredients`, `description`, `created_date`, `created_time`, `created_at`, `created_by`) VALUES
(1, '1', 'Brazilian Love Shower & Bath Gel', '1', 'assets/img/food/6686e3ea45efd_POPBRAZILIAN_1080x1080.webp', 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum, Citric Acid, Styrene/Acrylates Copolymer, Sodium Benzoate, Potassium Sorbate, Tetrasodium Glutamate Diacetate, Polyquaternium-7, Sodium Lauryl Sulfate, Paullinia Cupa', '', '2024-07-04', '23:31:40', '2024-07-04 23:31:40', '8'),
(2, '1', 'Creamy Shea Butterfly Shower & Bath Gel', '1', 'assets/img/food/6686e44411a37_Creamy-Shea-Burst_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Glycerin, Cocamidopropyl Betaine, Sodium Chloride, Glycol Distearate, Parfum (Fragrance), Coco-Glucoside, Citric Acid, Sodium Benzoate, Cocamide MEA, Laureth-10, Potassium Sorbate, Shea butter glycereth-8 esters, Hydr', '', '2024-07-04', '23:34:52', '2024-07-04 23:34:52', '8'),
(3, '1', 'Her Mango Thoughts Shower & Bath Gel', '1', 'assets/img/food/6686e499a672a_POPMANGO_1080x1080.webp', 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum, Citric Acid, Styrene/Acrylates Copolymer, Sodium Benzoate, Potassium Sorbate, Tetrasodium Glutamate Diacetate, Polyquaternium-7, Sodium Lauryl Sulfate, Sodium Hydroxi', '', '2024-07-04', '23:36:17', '2024-07-04 23:36:17', '8'),
(4, '1', 'Marshmallow Hearts Shower & Bath Gel', '1', 'assets/img/food/6686e4f479919_POPMALLOW_1080x1080-600x600.webp', 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum, Styrene/Acrylates Copolymer, Citric Acid, Sodium Benzoate, Potassium Sorbate, Tetrasodium Glutamate Diacetate, Polyquaternium-7, Sodium Lauryl Sulfate, Sodium Hydroxi', '', '2024-07-04', '23:37:48', '2024-07-04 23:37:48', '8'),
(5, '1', 'My Coconut Island Shower & Bath Gel', '1', 'assets/img/food/6686e54e4b678_POPCOCONUT_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Sodium Chloride, Cocamidopropyl Betaine, Ammonium Lauryl Sulfate, Parfum (Fragrance), Glycerin, Glycol Distearate, Sodium Lactate, Citric Acid, Sodium Benzoate, Potassium Sorbate, Glycol Stearate, Tetrasodium Glutamat', '', '2024-07-04', '23:39:18', '2024-07-04 23:39:18', '8'),
(6, '1', 'One Ginger Morning Shower & Bath Gel', '1', 'assets/img/food/6686e5ba562a9_POPGINGER_1080x1080.webp', 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum, Citric Acid, Styrene/Acrylates Copolymer, Sodium Benzoate, Limonene, Potassium Sorbate, Linalool, Tetrasodium Glutamate Diacetate, Polyquaternium-7, Geraniol, Citral,', '', '2024-07-04', '23:41:06', '2024-07-04 23:41:06', '8'),
(7, '1', 'Papaya Summer Shower & Bath Gel', '1', 'assets/img/food/6686e6854c904_POPPAPAYA_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum (Fragrance), Sodium Benzoate, Citric Acid, Coco-Glocoside, Guar Hydroxypropyltrimonium Chloride, Limonene, Benzotriazolyl Dodecyl p-Cresol, Carica (Papaya) Fru', '', '2024-07-04', '23:44:29', '2024-07-04 23:44:29', '8'),
(8, '1', 'The Honeycomb Secret Shower & Bath Gel', '1', 'assets/img/food/6686e6ed907d8_POPHONEY_1080x1080.webp', 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine,\r\nSodium Chloride, Glycerin, Parfum, Citric Acid, Styrene/Acrylates Copolymer, Sodium Benzoate, Potassium Sorbate, Tetrasodium Glutamate Diacetate, Polyquaternium-7, Sodium Lauryl Sulfate,\r\nSodium Hydro', '', '2024-07-04', '23:46:13', '2024-07-04 23:46:13', '8'),
(9, '1', 'The Raspberry Kiss Shower & Bath Gel', '1', 'assets/img/food/6686e74abb331_101001001_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Sodium Chloride, Ammonium Lauryl Sulfate, Cocamidopropyl Betaine, Parfum (Fragrance), Glycerin, Sodium Lactate, Citric Acid, Sodium Benzoate, Glycol Distearate, Potassium Sorbate, Tetrasodium Glutamate Diacetate, Lina', '', '2024-07-04', '23:47:46', '2024-07-04 23:47:46', '8'),
(10, '1', 'Vanilla Sponge Cake ‘Limited Ed.’ Shower & Bath Gel', '1', 'assets/img/food/6686e7a465312_VanillaSpongeCake2021_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Glycerin, Parfum (Fragrance), Sodium Lactate, Citric Acid, Styrene/Acrylates Copolymer, Sodium Benzoate, Potassium Sorbate, Limonene, Sodium Lauryl Sulfate, Vanilla Planifolia ', '', '2024-07-04', '23:49:16', '2024-07-04 23:49:16', '8'),
(11, '1', 'Wild Cherry Magic Shower & Bath Gel', '1', 'assets/img/food/6686e7f052ab4_cherry_1080x1080.webp', 'Aqua (Water), Sodium Laureth Sulfate, Sodium Chloride, Cocamidopropyl Betaine, Ammonium Lauryl Sulfate, Glycerin, Parfum (Fragrance), Glycol Distearate, Sodium Lactate, Citric Acid, Sodium Benzoate, Potassium Sorbate, Glycol Stearate, Tetrasodium Glutamat', '', '2024-07-04', '23:50:32', '2024-07-04 23:50:32', '8'),
(12, '1', 'Brazilian Love Body Scrub', '2', 'assets/img/food/6686e87157b82_BRAZILIANSCRUB_1080x1080.webp', 'Aqua (Water), Hydrated Silica, Cetearyl Alcohol, Isopropyl Palmitate, Glyceryl Stearate SE, Stearic Acid, Phenoxyethanol, Parfum (Fragrance), Butyrospermum Parkii (Shea Butter), Carbomer, Cocos Nucifera (Coconut) Shell Powder, Ethylhexylglycerin, Sodium H', '', '2024-07-04', '23:52:41', '2024-07-04 23:52:41', '8'),
(13, '1', 'My Coconut Island Body Scrub', '2', 'assets/img/food/6686e8e3f1700_COCONUTSCRUB_1080x1080.webp', 'Aqua (Water), Hydrated Silica, Cetearyl Alcohol, Isopropyl Palmitate, Glyceryl Stearate SE, Stearic Acid, Phenoxyethanol, Parfum (Fragrance), Butyrospermum Parkii (Shea Butter), Carbomer, Cocos Nucifera (Coconut) Shell Powder, Ethylhexylglycerin, Sodium H', '', '2024-07-04', '23:54:35', '2024-07-04 23:54:35', '8'),
(14, '1', 'Papaya Summer Body Scrub', '2', 'assets/img/food/6686e9551b632_Untitleddesign_8_1080x1080.webp', 'Aqua (Water),Hydrated Silica, Cetearyl Alcohol, Isopropyl Palmitate, Glyceryl Stearate SE, Stearic Acid, Phenoxyethanol, Parfum (Fragrance), Butyrospermum Parkii (Shea Butter), Carbomer, Cocos Nucifera (Coconut) Shell Powder, Ethylhexylglycerin, Limonene,', '', '2024-07-04', '23:56:29', '2024-07-04 23:56:29', '8'),
(15, '1', 'The Raspberry Kiss Body Scrub', '2', 'assets/img/food/6686e9bc3ca06_RASPBERRYSCRUB_1080x1080.webp', 'Aqua (Water), Hydrated Silica, Cetearyl Alcohol, Isopropyl Palmitate, Glyceryl Stearate SE, Stearic Acid, Phenoxyethanol, Parfum (Fragrance), Butyrospermum Parkii (Shea) Butter, Carbomer, Cocos Nucifera (Coconut) Shell Powder, Ethylhexylglycerin, Sodium H', '', '2024-07-04', '23:58:12', '2024-07-04 23:58:12', '8'),
(16, '1', 'Wild Cherry Magic Body Scrub', '2', 'assets/img/food/6686ea4bc678f_CHERRYSCRUB_1080x1080.webp', 'Aqua (Water), Hydrated Silica, Cetearyl Alcohol, Isopropyl Palmitate, Glyceryl Stearate SE, Stearic Acid, Phenoxyethanol, Parfum (Fragrance), Butyrospermum Parkii (Shea Butter), Carbomer, Cocos Nucifera (Coconut) Shell Powder, Ethylhexylglycerin, Sodium H', '', '2024-07-05', '00:00:35', '2024-07-05 00:00:35', '8'),
(17, '1', 'Gentle Flower Dreams Bath Salts', '4', 'assets/img/food/6686eaf9af54d_gentleflowerdreams_1080x1080.webp', 'Maris Sal, Sodium Laureth Sulfate, Sodium Coco-Sulfate, Hydrated Silica, Parfum (Fragrance), Disodium Lauryl Sulfosuccinate, Carthamus Tinctorius Seed Oil, Tocopherol, Simmondsia Chinensis Seed Oil, Linalool, Benzyl Salicylate, Citronellol, Geraniol, CI 1', '', '2024-07-05', '00:03:29', '2024-07-05 00:03:29', '8'),
(18, '1', 'Sweet Berry Kisses Bath Salts', '4', 'assets/img/food/6686eb64ed50d_sweetberrykisses_1080x1080.webp', 'Maris Sal, Sodium Laureth Sulfate, Sodium Coco-Sulfate, Hydrated Silica, Parfum (Fragrance), Disodium Lauryl Sulfosuccinate, Carthamus Tinctorius Seed Oil, Tocopherol, Simmondsia Chinensis Seed Oil, Benzyl Salicylate, Linalool, Limonene, CI 16255, CI 4205', '', '2024-07-05', '00:05:16', '2024-07-05 00:05:16', '8'),
(19, '1', 'Brazilian Love Hand Cream', '3', 'assets/img/food/6686ee359dccd_brazilianlovehandcream_1080x1080.webp', 'Aqua (Water), Glycerin, Cetearyl Alcohol, Glyceryl Stearate SE, Vitis Vinifera (Grape) Seed Oil, Parfum (Fragrance), Phenoxyethanol, Ceteareth-20, Butyrospermum Parkii (Shea) Butter, Ethylhexylglycerin, Xanthan Gum, Caprylic/Capric Triglyceride, Benzyl Sa', '', '2024-07-05', '00:11:35', '2024-07-05 00:11:35', '8'),
(20, '1', 'Marshmallow Hearts Hand Cream', '3', 'assets/img/food/6686ed45730b9_MarshmallowHandCreamNEW_1080x1080-300x300.webp', 'Aqua, Glycerin, Cetearyl Alcohol, Vitis Vinifera Seed Oil, Glyceryl Stearate SE, Butyrospermum Parkii Butter, Parfum, Phenoxyethanol, Caprylic/Capric Triglyceride, Ceteareth-20, Citric Acid, Xanthan Gum,\r\nEthylhexylglycerin, Sodium Hydroxide, Macadamia Te', '', '2024-07-05', '00:13:17', '2024-07-05 00:13:17', '8'),
(21, '1', 'My Coconut Island Hand Cream', '3', 'assets/img/food/6686eebfbcdbf_COCONUTHANDCREAMTRANS_1080x1080.webp', 'Aqua, Glycerin, Cetearyl Alcohol, Vitis Vinifera Seed Oil, Glyceryl Stearate SE, Butyrospermum Parkii Butter, Parfum, Phenoxyethanol, Caprylic/Capric Triglyceride, Ceteareth-20, Citric Acid, Xanthan Gum, Ethylhexylglycerin, Panthenol, Sodium Hydroxide, Co', '', '2024-07-05', '00:19:35', '2024-07-05 00:19:35', '8'),
(22, '1', 'The Raspberry Kiss Body Lotion', '3', 'assets/img/food/6686ef1043f76_TheRaspberryKissBodyLotion_1080x1080.webp', 'Aqua (Water), Glycerin, Cetearyl Alcohol, Vitis Vinifera (Grape) Seed Oil, Glyceryl Stearate SE, Butyrospermum Parkii (Shea Butter), Parfum (Fragrance), Phenoxyethanol, Caprylic/Capric Triglyceride, Ceteareth-20, Citric Acid, Xanthan Gum, Ethylhexylglycer', '', '2024-07-05', '00:20:56', '2024-07-05 00:20:56', '8'),
(23, '1', 'The Raspberry Kiss Hand Cream', '3', 'assets/img/food/6686ef7f39dc1_RASPHANDCREAMTRANS_1080x1080.webp', 'Aqua (Water), Glycerin, Cetearyl Alcohol, Vitis Vinifera (Grape) Seed Oil, Glyceryl Stearate SE, Butyrospermum Parkii (Shea Butter), Parfum (Fragrance), Phenoxyethanol, Caprylic/Capric Triglyceride, Ceteareth-20, Citric Acid, Xanthan Gum, Ethylhexylglycer', '', '2024-07-05', '00:22:47', '2024-07-05 00:22:47', '8'),
(24, '1', 'Wild Cherry Magic Body Lotion', '3', 'assets/img/food/6686efbd29c4f_WildCherryMagicLotion_1080x1080.webp', 'Aqua (Water), Glycerin, Cetearyl Alcohol, Glyceryl Stearate SE, Vitis Vinifera (Grape) Seed Oil, Phenoxyethanol, Parfum (Fragrance), Ceteareth-20, Butyrospermum Parkii (Shea Butter), Ethylhexylglycerin, Xanthan Gum, Caprylic/Capric Triglyceride, Citric Ac', '', '2024-07-05', '00:23:49', '2024-07-05 00:23:49', '8'),
(25, '1', 'Brazilian Love 5 Piece Bundle', '6', 'assets/img/food/6686f176b9324_BrazilianBundle_1080x1080.webp', '', '', '2024-07-05', '00:31:10', '2024-07-05 00:31:10', '8');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_purchase`
--

CREATE TABLE `tbl_purchase` (
  `id` int(11) NOT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `total_amount` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_purchase_item`
--

CREATE TABLE `tbl_purchase_item` (
  `id` int(11) NOT NULL,
  `purchase_id` varchar(255) DEFAULT NULL,
  `varient` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `total_amount` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_varient`
--

CREATE TABLE `tbl_varient` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `varient` varchar(255) DEFAULT NULL,
  `regular_price` varchar(255) DEFAULT NULL,
  `selling_price` varchar(255) DEFAULT NULL,
  `in_stock` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_time` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_varient`
--

INSERT INTO `tbl_varient` (`id`, `category`, `product`, `varient`, `regular_price`, `selling_price`, `in_stock`, `description`, `created_date`, `created_time`, `created_at`, `created_by`) VALUES
(1, '1', '1', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:32:22', '2024-07-04 23:32:22', '8'),
(2, '1', '2', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:35:10', '2024-07-04 23:35:10', '8'),
(3, '1', '3', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:36:35', '2024-07-04 23:36:35', '8'),
(4, '1', '4', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:38:01', '2024-07-04 23:38:01', '8'),
(5, '1', '5', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:39:29', '2024-07-04 23:39:29', '8'),
(6, '1', '6', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:41:20', '2024-07-04 23:41:20', '8'),
(7, '1', '7', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:44:44', '2024-07-04 23:44:44', '8'),
(8, '1', '8', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:46:29', '2024-07-04 23:46:29', '8'),
(9, '1', '9', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:48:01', '2024-07-04 23:48:01', '8'),
(10, '1', '10', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:49:28', '2024-07-04 23:49:28', '8'),
(11, '1', '11', '500ml', '560', '550', '1000000', '', '2024-07-04', '23:50:48', '2024-07-04 23:50:48', '8'),
(12, '2', '12', '225ml', '650', '600', '1000000', '', '2024-07-04', '23:53:22', '2024-07-04 23:53:22', '8'),
(13, '2', '13', '225ml', '650', '600', '1000000', '', '2024-07-04', '23:54:51', '2024-07-04 23:54:51', '8'),
(14, '2', '14', '225ml', '650', '600', '1000000', '', '2024-07-04', '23:56:48', '2024-07-04 23:56:48', '8'),
(15, '2', '15', '225ml', '650', '600', '1000000', '', '2024-07-04', '23:58:24', '2024-07-04 23:58:24', '8'),
(16, '2', '16', '225ml', '650', '600', '1000000', '', '2024-07-05', '00:00:50', '2024-07-05 00:00:50', '8'),
(17, '4', '17', '80gm', '500', '450', '1000000', '', '2024-07-05', '00:04:11', '2024-07-05 00:04:11', '8'),
(18, '4', '18', '80gm', '500', '450', '1000000', '', '2024-07-05', '00:05:31', '2024-07-05 00:05:31', '8'),
(19, '3', '19', '75ml', '500', '450', '1000000', '', '2024-07-05', '00:12:00', '2024-07-05 00:12:00', '8'),
(20, '3', '20', '75ml', '500', '450', '1000000', '', '2024-07-05', '00:13:35', '2024-07-05 00:13:35', '8'),
(21, '3', '21', '75ml', '500', '450', '1000000', '', '2024-07-05', '00:19:53', '2024-07-05 00:19:53', '8'),
(22, '3', '22', '250ml', '500', '450', '1000000', '', '2024-07-05', '00:21:20', '2024-07-05 00:21:20', '8'),
(23, '3', '23', '75ml', '500', '450', '1000000', '', '2024-07-05', '00:23:02', '2024-07-05 00:23:02', '8'),
(24, '3', '24', '250ml', '650', '600', '1000000', '', '2024-07-05', '00:24:13', '2024-07-05 00:24:13', '8'),
(25, '6', '25', '500ml', '1500', '1440', '1000000', '1 x Brazilian Love Body Lotion 250ml\r\n1 x Brazilian Love Shower Gel 500ml\r\n1 x Brazilian Love Body Scrub 225ml\r\n1 x Brazilian Love Hand Cream 75ml\r\n1 x BUNDLE EXCLUSIVE Brazilian Love Bath Bomb 80g', '2024-07-05', '00:32:01', '2024-07-05 00:32:01', '8');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(222) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `assign_to` varchar(500) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `role_assign` varchar(222) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `login` varchar(222) DEFAULT NULL,
  `logout` varchar(222) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `role`, `assign_to`, `status`, `role_assign`, `created_at`, `login`, `logout`) VALUES
(8, 'Admin', 'admin@gmail.com', NULL, '$2y$10$jPTCPnT4iEiSbmk.NcrbEuIyQuucBNctbxVasrNLnF1Ukd7B/8Uge', 2, 'chintamani-agency', 'active', NULL, '2024-06-14 10:36:00', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `online_users`
--
ALTER TABLE `online_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_brand`
--
ALTER TABLE `tbl_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_purchase`
--
ALTER TABLE `tbl_purchase`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_purchase_item`
--
ALTER TABLE `tbl_purchase_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_varient`
--
ALTER TABLE `tbl_varient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `online_users`
--
ALTER TABLE `online_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_brand`
--
ALTER TABLE `tbl_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_purchase`
--
ALTER TABLE `tbl_purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_purchase_item`
--
ALTER TABLE `tbl_purchase_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_varient`
--
ALTER TABLE `tbl_varient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

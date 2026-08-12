/**
 * 站点全局配置 —— 单一数据源
 * 公司名 / 域名 / 备案号 / 联系方式 / 产品线 在此集中管理，改一处全站生效。
 * 品牌中文名确认后，仅需修改 brand.name 即可全局替换。
 */

export const site = {
	/** 品牌名（占位，取自域名 ASSL） */
	brand: 'ASSL',
	/** 公司中文名（占位，备案后替换） */
	companyName: 'ASSL 网络科技',
	/** 公司简介（SEO description 用） */
	description:
		'面向企业的可信网络安全与基础服务提供商，提供 SSL 证书签发、证书管理与安全合规服务。',
	/** 主域名 */
	domain: 'assl.site',
	/** 官网地址 */
	url: 'https://assl.site',
	/** SSL 证书平台二级域名（二期上线） */
	sslUrl: 'https://ssl.assl.site',
	/** ICP 备案号 */
	icp: '粤ICP备2026111683号',
	/** ICP 备案查询链接（工信部） */
	icpLink: 'https://beian.miit.gov.cn/#/Integrated/index',
	/** 联系方式 */
	contact: {
		email: 'contact@assl.site',
		phone: '400-000-0000',
		address: '北京市 ·（公司地址备案后补充）',
	},
} as const;

/** 主导航 */
export const navLinks = [
	{ href: '/', label: '首页' },
	{ href: '/about', label: '关于我们' },
	{ href: '/products/ssl', label: 'SSL 证书' },
	{ href: '/contact', label: '联系我们' },
] as const;

/** 产品线 */
export const products = [
	{
		slug: 'ssl',
		name: 'SSL 证书平台',
		short: '一站式 SSL 证书签发与管理，快速签发 DV/OV/EV 证书',
		href: '/products/ssl',
		external: false,
		status: 'available' as const,
	},
	{
		slug: 'compliance',
		name: '等保合规咨询',
		short: '网络安全等级保护测评与合规咨询服务，助力通过等保评测',
		href: '#',
		external: false,
		status: 'coming' as const,
	},
	{
		slug: 'security',
		name: '安全合规服务',
		short: '网站安全检测、合规咨询与安全运维一体化服务',
		href: '#',
		external: false,
		status: 'coming' as const,
	},
] as const;

/** 行业解决方案 */
export const solutions = [
	{
		title: '电商行业',
		desc: '为电商平台保障交易链路 HTTPS 加密，提升用户信任与转化率。',
		icon: 'shopping-cart',
	},
	{
		title: '金融行业',
		desc: '满足金融级合规要求，提供 OV/EV 高信任证书与全程安全支持。',
		icon: 'shield',
	},
	{
		title: '教育行业',
		desc: '保障在线教育平台与教务系统的数据传输安全与稳定。',
		icon: 'academic',
	},
	{
		title: '政企行业',
		desc: '为政府与企事业单位提供高等级证书与定制化安全解决方案。',
		icon: 'building',
	},
] as const;

/** 为什么选择我们 */
export const advantages = [
	{
		title: '快速签发',
		desc: 'DV 证书分钟级签发，OV/EV 证书加急审核，业务上线不等待。',
	},
	{
		title: '专业支持',
		desc: '资深安全工程师 7×24 小时在线，从选型到部署全程指导。',
	},
	{
		title: '稳定可靠',
		desc: '与主流 CA 机构深度合作，证书可靠性高，续期管理省心。',
	},
] as const;

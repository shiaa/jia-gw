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

/** 常见问题 */
export const faqs = [
	{
		q: '什么是 SSL 证书？',
		a: 'SSL 证书（数字证书）用于在网站服务器与浏览器之间建立加密连接，确保数据传输安全，并在浏览器地址栏显示安全锁标志，提升用户信任。',
	},
	{
		q: 'DV、OV、EV 证书有什么区别？',
		a: 'DV 仅验证域名所有权，签发最快；OV 额外验证企业资质；EV 审核最严格，地址栏会直接显示企业名称，信任等级最高。',
	},
	{
		q: 'SSL 证书多久能签发？',
		a: 'DV 证书通常分钟级签发；OV 证书约 1-3 个工作日；EV 证书约 2-5 个工作日，具体视审核进度而定。',
	},
	{
		q: '证书到期前如何续期？',
		a: '我们提供到期自动预警与一键续期服务，确保证书到期前及时更新，避免因证书过期影响网站访问。',
	},
	{
		q: '如何部署 SSL 证书？',
		a: '我们支持主流服务器（Nginx/Apache/IIS）与云服务商的一键部署指导，提供图文教程与专家远程协助。',
	},
] as const;

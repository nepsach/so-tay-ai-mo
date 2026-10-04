// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://nepsach.github.io';
const BASE = '/so-tay-ai-mo';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [
		starlight({
			title: 'Sổ tay AI mở cho thầy cô',
			description:
				'Cách dùng AI cho công việc ở trường, Nếp Sách chia sẻ miễn phí. Mỗi bài dựa trên hướng dẫn chính hãng mới nhất, ghi rõ nguồn và ngày tra.',
			logo: { src: './src/assets/bieu-tuong.svg', alt: 'Biểu tượng Nếp Sách' },
			favicon: '/favicon.svg',
			// Một ngôn ngữ, đặt ở gốc trang (không có /vi/ trong địa chỉ)
			locales: { root: { label: 'Tiếng Việt', lang: 'vi' } },
			customCss: ['@fontsource/lora/400.css', '@fontsource/lora/600.css', '@fontsource/lora/700.css', './src/styles/so-tay.css'],
			head: [
				// Bản thử: chưa cho máy tìm kiếm lập chỉ mục. Bỏ dòng này khi Hiếu duyệt phát hành.
				{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}${BASE}/anh/so-tay-ngang.png` } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Sổ tay AI mở cho thầy cô' } },
			],
			components: { Footer: './src/components/ChanTrang.astro' },
			tableOfContents: false,
			pagination: true,
			sidebar: [
				{ label: 'Làm quen từ đầu', collapsed: true, items: [{ autogenerate: { directory: 'lam-quen' } }] },
				{ label: 'Cách làm từng việc', collapsed: true, items: [{ autogenerate: { directory: 'cach-lam' } }] },
				{ label: 'Tìm hiểu từng ứng dụng', collapsed: true, items: [{ autogenerate: { directory: 'ung-dung' } }] },
				{ label: 'Hiểu vì sao AI làm vậy', collapsed: true, items: [{ autogenerate: { directory: 'hieu-vi-sao' } }] },
				{ label: 'Thầy cô hỏi, Nếp Sách trả lời', collapsed: true, items: [{ autogenerate: { directory: 'hoi-dap' } }] },
				{ label: 'Ứng dụng vừa thay đổi gì', collapsed: true, items: [{ autogenerate: { directory: 'cap-nhat' } }] },
				{ label: 'Thầy cô góp cách hay', collapsed: true, items: [{ autogenerate: { directory: 'gop-y' } }] },
				{ label: 'Về sổ tay này', slug: 've-so-tay' },
			],
		}),
	],
});

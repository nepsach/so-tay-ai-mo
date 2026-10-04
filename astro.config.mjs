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
				'Cách dùng AI cho công việc ở trường, Nếp Sách chia sẻ miễn phí. Cách nào cũng được làm thử trước khi hướng dẫn.',
			logo: { src: './src/assets/bieu-tuong.svg', alt: 'Biểu tượng Nếp Sách' },
			favicon: '/favicon.svg',
			// Một ngôn ngữ, đặt ở gốc trang (không có /vi/ trong địa chỉ)
			locales: { root: { label: 'Tiếng Việt', lang: 'vi' } },
			head: [
				// Bản thử: chưa cho máy tìm kiếm lập chỉ mục. Bỏ dòng này khi Hiếu duyệt phát hành.
				{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}${BASE}/anh-xem-truoc.png` } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Sổ tay AI mở cho thầy cô' } },
			],
			components: { Footer: './src/components/ChanTrang.astro' },
			tableOfContents: false,
			pagination: true,
			sidebar: [
				{ label: 'Làm quen từ đầu', items: [{ autogenerate: { directory: 'lam-quen' } }] },
				{ label: 'Cách làm từng việc', items: [{ autogenerate: { directory: 'cach-lam' } }] },
				{ label: 'Tìm hiểu từng ứng dụng', items: [{ autogenerate: { directory: 'ung-dung' } }] },
				{ label: 'Hiểu vì sao AI làm vậy', items: [{ autogenerate: { directory: 'hieu-vi-sao' } }] },
				{ label: 'Thầy cô hỏi, Nếp Sách trả lời', items: [{ autogenerate: { directory: 'hoi-dap' } }] },
				{ label: 'Ứng dụng vừa thay đổi gì', items: [{ autogenerate: { directory: 'cap-nhat' } }] },
				{ label: 'Thầy cô góp cách hay', items: [{ autogenerate: { directory: 'gop-y' } }] },
				{ label: 'Về sổ tay này', slug: 've-so-tay' },
			],
		}),
	],
});

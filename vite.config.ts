import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Maps Figma asset hashes to themed placeholder images from picsum.photos.
 * Each image is chosen to match the semantic role in the LDRC design.
 */
const FIGMA_IMAGE_MAP: Record<string, string> = {
  // ── Hero carousel slides (wide landscape, conference/professional) ──
  'c6e23dedf7395ed8e4fe15c2e6771eeb39892ea4': 'https://picsum.photos/id/1060/1200/700',
  '0cfb18d36ac0940a4cc72c6ba6b1a5bf721f893a': 'https://picsum.photos/id/1027/1200/700',
  'dcc55873d01a51d48044cf7a5283563f4c513428': 'https://picsum.photos/id/1043/1200/700',

  // ── Upcoming Events background (architectural/office) ──
  '99564e2dc18d4793b30a7fa270cbba8cfbb17db1': 'https://picsum.photos/id/1011/1400/700',

  // ── Highlights section ──
  '4ff6ef3a898e0b18055b2632f15d4115562eb69f': 'https://picsum.photos/id/1025/400/300',   // imgImage4 – small preview
  '5ebdbabdb7df9432c98235dca289b38fdfbcc556': 'https://picsum.photos/id/1073/900/600',   // imgImage6 – main video thumbnail

  // ── Our Focus Area cards (portrait 332×423) ──
  '7944ea933c9b265858ac155d2acfe933d770866e': 'https://picsum.photos/id/1035/400/500',   // Fellowship
  '9eae3a2eda4d9a449420a88c3181c7999555bcef': 'https://picsum.photos/id/1040/400/500',   // Fellowship
  'bf9b7184885723d53a57060f9f509f25d0713f40': 'https://picsum.photos/id/1042/400/500',   // Fellowship
  '1dbf181360286606b42836c5a727a28419749fd9': 'https://picsum.photos/id/1044/400/500',   // Research Programs
  '4f3b3ceff10bb44d363e4682553e3fd1c071056e': 'https://picsum.photos/id/1048/400/500',   // Publications
  '0ce1eb34c88f4ee95035d23855d5ba745568e766': 'https://picsum.photos/id/1050/400/500',   // Partnerships
  '37d2ab3f359cd7869fe272dd4c110fa006672e3f': 'https://picsum.photos/id/1053/400/500',   // Congressional Education
  'b1718635334beecd2630aa519975f9fa656249c8': 'https://picsum.photos/id/1055/400/500',   // Policy Analysis
  '68919f97f6883199c6bd6781e2b4f6bc34e29937': 'https://picsum.photos/id/1056/400/500',   // Global Outreach
  '0f3fe6472ed147a172b0cfa71580713e52f0b1e9': 'https://picsum.photos/id/1059/400/500',   // Legal Reform
  'b93e8758e31177ff49e3050117c7aa3b9becde8c': 'https://picsum.photos/id/1067/400/500',   // Academic Programs
  '27bf1ffa28ac168f311e10fd447ea0e016f5e26b': 'https://picsum.photos/id/1071/400/500',   // Community Engagement
  '8278dd9dea85947faeedb9bb6efeb8d281e18326': 'https://picsum.photos/id/1074/400/500',   // Innovation Hub

  // ── Transforming Legal Landscapes – LDRC 2024 portrait ──
  '439ac7fcbe93b2914de65756651146a8b9063d01': 'https://picsum.photos/id/1032/600/750',
};

// Fallback for any unmapped hash
const FALLBACK = 'https://picsum.photos/id/1000/800/600';

function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id;
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        // Extract the hash from "figma:asset/<hash>.png"
        const raw = id.slice('\0figma:asset/'.length);       // e.g. "abc123.png"
        const hash = raw.replace(/\.[^.]+$/, '');             // strip extension
        const url = FIGMA_IMAGE_MAP[hash] ?? FALLBACK;
        return `export default ${JSON.stringify(url)};`;
      }
    },
  };
}

export default defineConfig({
  plugins: [figmaAssetPlugin(), react(), tailwindcss()],
  root: '.',
});

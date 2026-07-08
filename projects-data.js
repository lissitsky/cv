/*
  PROJECTS DATA — substitui estes 6 objetos placeholder pelos teus projetos reais.

  Campos:
  - id: identificador único, só letras minúsculas e hífens (usado no URL: project.html?id=...)
  - category: exatamente "Motion Graphics", "Design Gráfico" ou "UI/UX"
  - coverImage: imagem de capa, proporção 4:3, recomendado 1200x900px
  - descriptionEN / descriptionPT: resumo curto do projeto (1-2 frases)
  - processEN / processPT: parágrafo sobre o processo/decisões criativas
  - tools: array de ferramentas usadas
  - media: array de imagens/vídeos para a página de detalhe (proporção 4:3, ~1600x1200px)
*/

const projects = [
  {
    id: "brand-system-volta",
    title: "Volta — Brand System",
    category: "Design Gráfico",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Volta brand system — geometric shapes on white",
    descriptionEN: "Complete visual identity for Volta, an independent cultural magazine focused on urban architecture and spatial politics. The system spans print, digital, and environmental signage.",
    descriptionPT: "Identidade visual completa para a Volta, uma revista cultural independente focada em arquitetura urbana e política do espaço. O sistema abrange impressão, digital e sinalética ambiental.",
    processEN: "Started from a typographic study of vernacular signage found in Lisbon's industrial neighborhoods. The wordmark is set in a modified grotesque, deliberately unevenly spaced to reference hand-painted shop signs. Colour palette is restricted to two inks for print economy.",
    processPT: "Partiu de um estudo tipográfico da sinalética vernacular de bairros industriais de Lisboa. O logótipo usa uma grotesca modificada, com espaçamento propositadamente irregular para referenciar letreiros pintados à mão. A paleta de cor é reduzida a duas tintas por economia de impressão.",
    tools: ["Figma", "Adobe Illustrator", "InDesign"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=1200&fit=crop&auto=format", alt: "Volta brand mark on white paper" },
      { type: "image", src: "https://images.unsplash.com/photo-1600147131759-880e94a6185f?w=1600&h=1200&fit=crop&auto=format", alt: "Brand guidelines spread showing typography" },
      { type: "image", src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1600&h=1200&fit=crop&auto=format", alt: "Printed magazine cover with Volta logo" }
    ]
  },
  {
    id: "transit-motion",
    title: "Transit — Motion Titles",
    category: "Motion Graphics",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Motion title frames — abstract typographic animation",
    descriptionEN: "Opening title sequence for Transit, a short documentary about night-shift workers in the Lisbon metro. The brief called for restrained motion — not decorative, but structural.",
    descriptionPT: "Sequência de abertura para Transit, um documentário curto sobre trabalhadores noturnos do metro de Lisboa. O briefing pedia um movimento contido — não decorativo, mas estrutural.",
    processEN: "Worked from a constraint: all motion had to derive from the actual timetable typography of the metro system. Letters appear and disappear on grid, echoing the departure board mechanics. Audio-reactive elements were added in post without overwhelming the spare visual language.",
    processPT: "Trabalhado a partir de uma restrição: todo o movimento tinha de derivar da tipografia real dos horários do metro. As letras surgem e desaparecem na grelha, ecoando a mecânica dos painéis de partida. Elementos reativos ao som foram adicionados em pós-produção sem sobrecarregar a linguagem visual, propositadamente austera.",
    tools: ["After Effects", "Cinema 4D", "DaVinci Resolve"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1600&h=1200&fit=crop&auto=format", alt: "Transit title frame — white text on black" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1600&h=1200&fit=crop&auto=format" },
      { type: "image", src: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=1600&h=1200&fit=crop&auto=format", alt: "Storyboard frames for motion sequence" }
    ]
  },
  {
    id: "arquivo-ui",
    title: "Arquivo — Digital Archive UI",
    category: "UI/UX",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Arquivo app — archive search interface on dark background",
    descriptionEN: "Interface design for Arquivo, a community-run digital archive of Portuguese vernacular photography. The product needed to feel institutional without being cold, and accessible to non-specialist users.",
    descriptionPT: "Design de interface para o Arquivo, um arquivo digital comunitário de fotografia vernacular portuguesa. O produto precisava de parecer institucional sem ser frio, e acessível a utilizadores não especialistas.",
    processEN: "Research phase involved auditing existing archival platforms (Europeana, DPLA, Internet Archive). The final design uses a strict two-column reading layout inspired by academic journal formats, with search and metadata always visible alongside the primary image.",
    processPT: "A fase de investigação incluiu a auditoria de plataformas de arquivo existentes (Europeana, DPLA, Internet Archive). O design final usa um layout rígido de duas colunas inspirado em revistas académicas, com pesquisa e metadados sempre visíveis junto da imagem principal.",
    tools: ["Figma", "Framer", "Protopie"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1200&fit=crop&auto=format", alt: "Arquivo main search interface" },
      { type: "image", src: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=1600&h=1200&fit=crop&auto=format", alt: "Image detail view with metadata panel" }
    ]
  },
  {
    id: "forma-poster",
    title: "Forma — Exhibition Posters",
    category: "Design Gráfico",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Forma exhibition poster series — bold black type on white",
    descriptionEN: "Series of six A1 posters for Forma, a group exhibition exploring the relationship between industrial manufacturing and craft. Posters were designed for both print and digital display.",
    descriptionPT: "Série de seis cartazes A1 para a Forma, uma exposição coletiva que explora a relação entre a manufatura industrial e o artesanato. Os cartazes foram desenhados para impressão e para ecrã.",
    processEN: "Each poster uses a single typeface at extreme scale — the type itself carries all visual weight. No imagery, no ornament. The challenge was making six posters feel cohesive while each being formally distinct. Grid system was derived from standard paper sizes.",
    processPT: "Cada cartaz usa apenas um tipo de letra em escala extrema — a própria tipografia carrega todo o peso visual. Sem imagem, sem ornamento. O desafio foi manter coesão entre os seis cartazes, sendo cada um formalmente distinto. A grelha foi derivada dos formatos de papel normalizados.",
    tools: ["Adobe Illustrator", "InDesign"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1600&h=1200&fit=crop&auto=format", alt: "Forma poster 01 — monumental sans type" },
      { type: "image", src: "https://images.unsplash.com/photo-1547826039-bdbfe4addf69?w=1600&h=1200&fit=crop&auto=format", alt: "Forma poster 03 — inverted colorway" }
    ]
  },
  {
    id: "lobo-branding",
    title: "Lobo — Restaurant Identity",
    category: "Design Gráfico",
    year: "2022",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Lobo restaurant brand — menu and collateral on table",
    descriptionEN: "Full identity for Lobo, a Lisbon restaurant specializing in grilled fish and natural wine. The brief was: old-school, unpretentious, built to last.",
    descriptionPT: "Identidade completa para o Lobo, um restaurante lisboeta especializado em peixe grelhado e vinho natural. O briefing era: à moda antiga, sem pretensões, feito para durar.",
    processEN: "Drew reference from 1970s Portuguese restaurant menus and tascas — hand-rendered letterforms, ruled tables, limited colour. The logotype was drawn by hand and then digitised, retaining irregularity. Applied across menus, matchbooks, wall signage, and staff aprons.",
    processPT: "Referências recolhidas em ementas e tascas portuguesas dos anos 70 — letras desenhadas à mão, tabelas com réguas, cor limitada. O logótipo foi desenhado à mão e depois digitalizado, mantendo a irregularidade. Aplicado em ementas, caixas de fósforos, sinalética de parede e aventais da equipa.",
    tools: ["Adobe Illustrator", "Procreate", "InDesign"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1200&fit=crop&auto=format", alt: "Lobo menu on wooden table" },
      { type: "image", src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&h=1200&fit=crop&auto=format", alt: "Close-up of Lobo logotype — hand-drawn letterforms" }
    ]
  },
  {
    id: "fluxo-motion",
    title: "Fluxo — Loop Series",
    category: "Motion Graphics",
    year: "2022",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop&auto=format",
    coverAlt: "Fluxo motion loop — abstract geometric forms in motion",
    descriptionEN: "Personal project: a series of 12 looping motion studies exploring emergent behaviour in simple geometric systems. Published on Instagram as a creative research exercise.",
    descriptionPT: "Projeto pessoal: uma série de 12 estudos de movimento em loop que exploram comportamento emergente em sistemas geométricos simples. Publicado no Instagram como exercício de investigação criativa.",
    processEN: "Each loop is generated from a small set of rules — rotation speed, scale factor, colour mode — and iterated until something unexpected emerges. The discipline was in knowing when to stop. No narrative, no explanation, just the loop.",
    processPT: "Cada loop é gerado a partir de um pequeno conjunto de regras — velocidade de rotação, fator de escala, modo de cor — e iterado até surgir algo inesperado. A disciplina estava em saber quando parar. Sem narrativa, sem explicação, só o loop.",
    tools: ["After Effects", "Processing", "TouchDesigner"],
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1200&fit=crop&auto=format", alt: "Fluxo loop still — intersecting circles" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1200&fit=crop&auto=format" }
    ]
  }
];

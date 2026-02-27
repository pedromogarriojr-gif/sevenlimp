

# Template Generico de Site para Esteticista

## Objetivo
Transformar o site atual num template generico de negocio de estetica, removendo toda a marca "Sublime by Ines Goncalves" e substituindo por placeholders facilmente personalizaveis.

## O que vai mudar

### 1. Remover branding especifico
- **Header**: Substituir "Sublime" e "by Ines Goncalves" por placeholders genericos (ex: "O Seu Negocio" / "Centro de Estetica")
- **Footer**: Remover "Sublime by Ines Goncalves" do copyright e descricao
- **FinalCTA**: Substituir "Sublime?" por texto generico
- **Reviews page**: Substituir "Sublime" por placeholder
- **index.html**: Atualizar titulo, meta description, og tags, author e canonical URL

### 2. Remover dados pessoais
- **Telefone**: Substituir 912 969 670 por placeholder (ex: "000 000 000")
- **WhatsApp**: Atualizar link wa.me com numero generico
- **Redes sociais** (`src/config/social.ts`): Limpar URLs do Facebook e Instagram
- **Webhook Make.com**: Remover URL do webhook em HeroSection (deixar comentario TODO)
- **Google Reviews**: Manter placeholder que ja existe

### 3. Atualizar traducoes (pt.json e en.json)
- Substituir todas as mencoes a "Sublime", "Ines Goncalves", "Setubal" por placeholders genericos
- Testemunhos: Manter como exemplos mas com nomes genericos
- Press section: Substituir artigo especifico por placeholder generico
- Manter toda a estrutura e textos de servicos (sao genericos o suficiente)

### 4. Ficheiros a modificar

| Ficheiro | Alteracao |
|----------|-----------|
| `index.html` | Titulo, meta tags, canonical |
| `src/config/social.ts` | Limpar URLs |
| `src/components/Header.tsx` | Nome do negocio generico |
| `src/components/HeroSection.tsx` | Remover webhook, telefone placeholder |
| `src/components/FinalCTA.tsx` | Texto generico no CTA |
| `src/components/FloatingChat.tsx` | Telefone/WhatsApp placeholder |
| `src/components/Footer.tsx` | Copyright generico |
| `src/pages/Reviews.tsx` | Logo generico |
| `src/i18n/locales/pt.json` | Remover branding dos textos |
| `src/i18n/locales/en.json` | Remover branding dos textos |

### 5. O que se mantem
- Toda a estrutura e layout do site
- Todos os componentes e seccoes
- Todas as animacoes e estilos
- Imagens de servicos e galeria (sao genericas)
- Sistema de traducao PT/EN
- Formulario de contacto (sem webhook)
- Pagina de Reviews
- Cores e tipografia (rose gold / premium aesthetic)

## Resultado
Um template pronto a usar que pode ser facilmente personalizado para qualquer negocio de estetica, bastando alterar os placeholders nos ficheiros de traducao e configuracao.

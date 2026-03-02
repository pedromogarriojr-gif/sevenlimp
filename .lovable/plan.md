

# Receber Submissões do Formulário por Email

## Situação Atual
O formulário de contacto na homepage guarda os dados na base de dados (tabela `contact_submissions`), mas não envia nenhuma notificação por email.

## Solução
Criar uma função backend que envia um email para ti sempre que alguém preenche o formulário. A função será chamada automaticamente após cada submissão.

## Passos

### 1. Configurar o email de destino
- Vou pedir-te o email onde queres receber as notificações dos formulários.
- Este email será guardado como um segredo seguro no backend.

### 2. Criar função backend de envio de email
- Criar uma função que recebe os dados do formulário e envia um email formatado com todas as informações (nome, email, telefone, localização, tipo de pintura, etc.).
- Usará o serviço de email integrado do Lovable AI para enviar as notificações.

### 3. Integrar com o formulário existente
- Após guardar os dados na base de dados com sucesso, o formulário também chamará a nova função backend para disparar o email de notificação.
- Se o email falhar, o utilizador ainda verá a mensagem de sucesso (os dados já estão guardados na base de dados).

---

### Detalhes Técnicos

**Edge function `notify-contact`:**
- Recebe os dados do formulário via POST
- Formata um email HTML com todos os campos preenchidos
- Envia usando Lovable AI (Resend integrado)
- Retorna sucesso/erro

**Alteração em `HeroSection.tsx`:**
- Após o `insert` na base de dados, chama `supabase.functions.invoke('notify-contact', { body: formData })`
- O envio do email é "fire-and-forget" para não bloquear a experiência do utilizador


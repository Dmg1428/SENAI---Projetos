# Como iniciar um repositório Git e enviar para o GitHub

Este guia mostra passo a passo como criar um repositório Git do zero, fazer o commit inicial e enviar os arquivos para o GitHub usando SSH.

---

## 1. Navegar até a pasta do projeto

```bash
cd "/c/Users/SEU_USUARIO/SEU_PROJETO"
```

---

## 2. Inicializar o repositório Git

```bash
git init
git branch -M main
```

---

## 3. Adicionar arquivos para o commit

```bash
git add .
```

---

## 4. Criar o commit inicial

```bash
git commit -m "Commit inicial"
```

---

## 5. Configurar a chave SSH para o GitHub

### Criar a chave SSH

```bash
ssh-keygen -t ed25519 -C "seu-email@github.com"
```

### Adicionar a chave ao agente SSH

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Copiar a chave pública e adicionar no GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

* Cole o conteúdo em **GitHub → Settings → SSH and GPG keys → New SSH key**

### Testar a conexão SSH

```bash
ssh -T git@github.com
```

---

## 6. Conectar o repositório local ao GitHub

```bash
git remote add origin git@github.com:SEU_USUARIO/NOME_REPOSITORIO.git
```

Se o remoto já existir:

```bash
git remote set-url origin git@github.com:SEU_USUARIO/NOME_REPOSITORIO.git
```

---

## 7. Enviar arquivos para o GitHub

```bash
git push origin main --force
```

> ⚠️ O `--force` sobrescreve o histórico do repositório remoto. Use apenas se tiver certeza.

---

Pronto! Esse texto já está organizado e pode ser colocado no seu `README.md`.

Se você quiser, posso criar **uma versão ainda mais visual e fácil de ler**, com **emojis e destaques**, para ficar mais profissional e atrativo no GitHub.

Quer que eu faça isso?

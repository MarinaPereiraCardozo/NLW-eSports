# Backend

## Entidades

### Games

id
title
bannerUrl

### Ads

id
gameId
name
yearsPlaying
discord
weekDays
hoursStart
hourEnd
useVoiceChannel
createdAt

## Casos de uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
-Listagem de anúncios por game
- Buscar discord pelo ID do anúncio



### Melhorias

Adicionar validação dos dados recebidos no post de ads
    lib sugerida: zod javascript
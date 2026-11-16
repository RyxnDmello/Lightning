# ========================================================== #
# ======================[ DOCKERFILE ]====================== #
# ========================================================== #

FROM oven/bun:1 AS base

WORKDIR /app

# ========================================================== #
# =====================[ INSTALLATION ]===================== #
# ========================================================== #

FROM base AS install

WORKDIR /install

COPY package.json bun.lock ./

RUN cd /install && bun install --frozen-lockfile --production

# ========================================================== #
# =======================[ RELEASE ]======================== #
# ========================================================== #

FROM base AS release

WORKDIR /app

COPY --from=install --chown=bun:bun /install/node_modules ./node_modules

COPY --chown=bun:bun package.json tsconfig.json ./
COPY --chown=bun:bun src ./src

USER bun

CMD ["bun", "src/server.ts"]
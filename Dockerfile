# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
# COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./
# RUN \
#   if [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
#   elif [ -f yarn.lock ]; then yarn install; \
#   else npm install; fi

# Copy rest of the app
COPY . .

# Expose Next.js port
EXPOSE 3001

# Default command (dev mode)
# CMD [ "npm", "run", "dev" ]
CMD [ "npm", "run", "start" ]

FROM node:12
WORKDIR /app
COPY ./ ./
RUN npm ci
ENV HTTPS=true
EXPOSE 3000
CMD ["npm", "run", "start"]
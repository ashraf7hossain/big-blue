FROM node:16.19.0

# RUN cd frontend

RUN mkdir /frontend
WORKDIR /frontend

RUN npm install -g ionic@latest

COPY package.json package-lock.json ./

RUN npm install
ARG frontend_port
ENV FRONTEND_PORT=${frontend_port}

RUN echo "Build arg frontend_port=${frontend_port}"
RUN echo "Environment variable FRONTEND_PORT=${FRONTEND_PORT}"


RUN echo ""ionic serve -p ${frontend_port}""
# RUN port=$((frontend_port))
# RUN echo ${port}

COPY . .

CMD ["sh","-c","ionic serve -p ${frontend_port}"]

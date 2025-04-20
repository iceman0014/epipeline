FROM 10.100.139.147/base/nginx:1.17.8

ENV TZ "Asia/Shanghai"
ENV TERM xterm

ENV LC_ALL zh_CN.UTF-8
ENV LANG zh_CN.UTF-8
ADD $WORKSPACE/dist/dist.tar.gz /usr/share/nginx/html/micro/epipeline-customer-manage-system
COPY nginx/cnap-dev/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8099

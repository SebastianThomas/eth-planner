# No build step: the app is plain HTML, CSS and JS by design, so there is
# nothing to compile and a single stage is enough.
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css app.js /usr/share/nginx/html/
COPY programmes /usr/share/nginx/html/programmes

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

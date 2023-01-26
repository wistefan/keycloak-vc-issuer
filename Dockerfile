FROM quay.io/keycloak/keycloak:20.0.3
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin
#ENV KC_SPI_THEME_ADMIN_DEFAULT=siop-2
ENV VCISSUER_ISSUER_DID=did:key:z6MkhzRsyyPPqBQmXfc4ga2Qp8ASfT9ySTknKkieiKCtbNAh
ENV VCISSUER_WALTID_ADDRESS=http://localhost:6001/v1/credentials/issue
ADD target/vc-issuer-SNAPSHOT-2.jar /opt/keycloak/providers/vc-issuer-SNAPSHOT-2.jar
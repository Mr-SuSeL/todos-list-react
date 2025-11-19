import React from 'react';
import Container from '../../common/Container';
import Header from '../../common/Header';
import Section from '../../common/Section';

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Łukasz Susłowicz"
            body={
                <>
                    <p>
                        Cześć! Nazywam się Łukasz Susłowicz i jestem <strong>twórcą tej aplikacji</strong>.
                    </p>
                    <p>
                        Jestem pasjonatem programowania i od kilku lat zajmuję się tworzeniem aplikacji webowych. Moim celem jest dostarczanie użytkownikom narzędzi, które ułatwiają codzienne życie i zwiększają produktywność.
                        W wolnym czasie lubię czytać książki o nowych technologiach, eksperymentować z nowymi frameworkami oraz uczestniczyć w konferencjach branżowych.
                        Jeśli masz pytania lub chcesz się ze mną skontaktować, zapraszam do odwiedzenia mojej strony internetowej lub profili w mediach społecznościowych.
                    </p>
                </>
            }
        />
    </Container>
);
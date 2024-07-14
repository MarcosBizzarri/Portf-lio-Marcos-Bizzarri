import React from 'react';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <div className={styles.navbar}>
      <Navbar>
        <Container className={styles.container}>
          <Navbar.Brand className={styles.brand}>
            <h1 className={styles.titulo}>Portfólio</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;

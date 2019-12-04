<template>
  <b-container fluid>
    <b-container>
      <header class="header py-3">
        <g-link class="logo-home" to="/">
          <h4 class="brand-name text-dark font-weight-bold text-center">
            Quang Dung & Green Patio
            <br />
            <small class="text-muted">Furniture</small>
          </h4>
        </g-link>
      </header>
    </b-container>
    <div>
      <b-nav align="center">
        <b-nav-item active>Home</b-nav-item>
        <b-nav-item-dropdown text="Introduction" toggle-class="nav-link-custom" right>
          <b-dropdown-item>Company History</b-dropdown-item>
          <b-dropdown-item>Capacities</b-dropdown-item>
          <b-dropdown-item>Leadership</b-dropdown-item>
          <b-dropdown-item>Certificates</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Products</b-nav-item>
        <b-nav-item>Customers</b-nav-item>
        <b-nav-item>Job opporturnities</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
    </div>
  </b-container>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }

  & > .brand-name {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif;
    font-size: 2rem;
  }
}

.logo-desktop {
  @media (max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media (max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav-item > a {
  color: #0d4680 !important;
}

.nav-item > a:hover {
  color: #007bff !important;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>

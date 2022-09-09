<template>
  <div>
    <b-navbar toggleable="xl" type="light" variant="light" sticky class="primary-navbar">
      <b-container fluid>
        <b-navbar-brand :to="'/'">
          <img src="https://codeforiati.org/assets/img/logo.png" alt="Code for IATI" height="30px" />
          Code for IATI Analytics
        </b-navbar-brand>
        <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
        <b-collapse id="navbar-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'index'}" exact-active-class="active">Home
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'publishers'}" exact-active-class="active">Publishers
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse><!--/.nav-collapse -->
      </b-container>
    </b-navbar>
    <b-container class="mt-5 mb-5">
      <nuxt />
    </b-container>
  </div>
</template>
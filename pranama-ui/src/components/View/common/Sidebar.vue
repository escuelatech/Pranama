<template>
     <div
      id="sidebar"
      @click="handleSidebarClick"
      :class="{ inactive: isSidebarInactive, 'no-transition': hideTransition }"
    >
        <a href="#sidebar" @click="handleToggle" class="toggle">Toggle</a>
        <div @click="isSidebarInactive = true" class="mobile-backdrop"></div>
        <div class="inner">
          <!-- Search -->
          <section id="search" class="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          <!-- Menu -->
          <nav id="menu">
            <header class="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li>
               <!-- <a @click="handleLinkClick" href="index.html">Homepage</a>-->
                <router-link :to="{ name: 'Pranama' }" @click="handleLinkClick" >HOMEPAGE</router-link>
              </li>
              <li v-if="isAuthenticated">
                <!-- <a href="#" v-if="isAuthenticated" @click="handleRouterLinkClick"  :to="{ name: 'Dashboard' }">Dashboard</a> -->
                 <router-link v-if="isAuthenticated" @click="handleRouterLinkClick"  :to="{ name: 'Dashboard' }">Dashboard</router-link> 
              </li>
              <!-- <li>
                <a href="#" v-if="isAuthenticated" @click.prevent="handleLogout">LogOut</a>
                 <router-link v-else @click="handleRouterLinkClick"  :to="{ name: 'LoginPage' }">Login</router-link> 
              </li> -->
              <!-- <li>
                <a @click="handleLinkClick" href="Whatwedo.html">WHAT WE DO</a>
                <router-link :to="{ name: 'WhatWeDo' }" @click="handleLinkClick" >WHAT WE DO</router-link>
              </li> -->
              <li>
              <!--  <a @click="handleLinkClick" href="elements.html">Elements</a>-->
                 <router-link :to="{ name: 'TheProcess' }" @click="handleLinkClick" >THE PROCESS</router-link>
              </li>
                <li>
                 <router-link :to="{ name: 'Hospital' }" @click="handleLinkClick" >HOSPITALS</router-link>
              </li>
              <li>
                <!--a @click="handleLinkClick" href="#">Etiam Dolore</a>-->
                 <router-link :to="{ name: 'Ayurveda' }">AYURVEDA</router-link>
              </li>
              <li>
                <!--a @click="handleLinkClick" href="#">Adipiscing</a>-->
                <router-link :to="{ name: 'Yoga' }">YOGA</router-link>
              </li>
               <!--<li>
               <span class="opener">Another Submenu</span>
                <ul>
                  <li>
                    <a @click="handleLinkClick" href="#">Lorem Dolor</a>
                  </li>
                  <li>
                    <a @click="handleLinkClick" href="#">Ipsum Adipiscing</a>
                  </li>
                  <li>
                    <a @click="handleLinkClick" href="#">Tempus Magna</a>
                  </li>
                  <li>
                    <a @click="handleLinkClick" href="#">Feugiat Veroeros</a>
                  </li>
                </ul>
              </li>-->
              <li>
                <!--a @click="handleLinkClick" href="#">Maximus Erat</a>-->
                <router-link :to="{ name: 'MentalHealth' }" @click="handleLinkClick">MENTAL HEALTH</router-link>
              </li>
              <li>
               <!-- <a @click="handleLinkClick" href="#">Sapien Mauris</a>-->
                 <router-link :to="{ name: 'PreventiveHealth' }" >PREVENTIVE HEALTH</router-link>
              </li>
              <li>
               <!-- <a @click="handleLinkClick" href="#">Amet Lacinia</a>-->
                <router-link :to="{ name: 'DoctorAtHome' }">DOCTOR AT HOME</router-link>
              </li>
              <li>
                <router-link @click="handleRouterLinkClick" :to="{ name: 'ContactEmailPage' }">Contact Us</router-link>
              </li>
              <!-- <li>
                <router-link @click="handleRouterLinkClick" :to="{ name: 'form1' }">FORM1</router-link>
              </li>
               <li>
                <router-link @click="handleRouterLinkClick" :to="{ name: 'form2' }">FORM2</router-link>
              </li> -->
               <li>
                <router-link @click="handleRouterLinkClick" :to="{ name: 'resetPassword' }">RESET PASSWORD</router-link>
              </li>
            </ul>
          </nav>
          <!-- Section 
         <section>
            <header class="major">
              <h2>Ante interdum</h2>
            </header>
            <div class="mini-posts">
              <article>
                <a href="#" class="image">
                  <img src="images/pic07.jpg" alt />
                </a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic08.jpg" alt />
                </a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic09.jpg" alt />
                </a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
            </div>
            <ul class="actions">
              <li>
                <a href="#" class="button">More</a>
              </li>
            </ul>
          </section> -->

          <!-- Section -->
         <!-- <section>
            <header class="major">
              <h2>Get in touch</h2>
            </header>
            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            <ul class="contact">
              <li class="icon solid fa-envelope">
                <a href="#">information@untitled.tld</a>
              </li>
              <li class="icon solid fa-phone">(000) 000-0000</li>
              <li class="icon solid fa-home">
                1234 Somewhere Road #8254
                <br />Nashville, TN 00000-0000
              </li>
            </ul>
          </section>-->

          <!-- Footer -->
          <footer id="footer">
            <p class="copyright">
              &copy;Pranama. All rights reserved. 
              <a href="https://escuelatech.com"> <br>
              Designed & </a>. Development:
              <a href="https://escuelatech.com"> Escuela Technologies </a>.
            </p>
          </footer>
        </div>
      </div>
</template>

<script>
import BREAKPOINTS, { isMoreThan } from '@/shared/breakpoints';
import { debounce } from 'lodash-es';
import logoutMixin from "@/mixins/logout.js";

export default {
  name: 'Sidebar',
  data() {
    return {
      isSidebarInactive: false,
      isBreakpointMoreThanLarge: null,
      hideTransition: false,
      isDropdownOpen: false// dropdown sample
    }
  },
  mixins: [logoutMixin],
  watch: {
    isBreakpointMoreThanLarge(newValue, oldValue) {
      if (typeof oldValue !== "boolean") {
        return
      }
      this.hideTransition = true;
      this.isSidebarInactive = !newValue;
      setTimeout(() => {
        this.hideTransition = false;
      }, 500);
    }
  },
  created() {
    this.checkWindowWidthDebounced = debounce(this.checkWindowWidth, 20);
    window.addEventListener('resize', this.checkWindowWidthDebounced);
    this.checkWindowWidth();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkWindowWidthDebounced);
  },
  methods: {
    checkWindowWidth() {
      const width = window.innerWidth;
      this.isBreakpointMoreThanLarge = isMoreThan(width, BREAKPOINTS.L);
      this.isSidebarInactive = !this.isBreakpointMoreThanLarge;
    },
    handleDropdownClick() {
      // dropdown should be a separate component
      this.isDropdownOpen = !this.isDropdownOpen;
        },
    handleSidebarClick(e) {
      if (!this.isBreakpointMoreThanLarge) {
        e.stopPropagation();
      }
    },
    handleToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isSidebarInactive = !this.isSidebarInactive;
    },
    handleRouterLinkClick() {
      if (!this.isBreakpointMoreThanLarge) {
        this.isSidebarInactive = true;
      }
    },
    handleLinkClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!this.isBreakpointMoreThanLarge) {
        this.isSidebarInactive = true;
       this.isDropdownOpen = true;
      }
      // TODO probably just use router-link everywhere and remove this
      setTimeout(function() {
        if (e.target.target == '_blank')
          window.open(e.target.href);
        else
          window.location.href = e.target.href;

      }, 500);
    },

  }
}
</script>
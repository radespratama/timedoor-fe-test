<template>
  <footer>
    <div class="container-fluid mx-auto py-5 px-4">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <a href="/" class="nav-footer"><span>PHD</span> わくわく</a>

          <h5 class="nav-footer-secondary">Find Us:</h5>

          <div class="d-flex align-items-center gap-3">
            <button class="btn btn-outline-warning btn-icon">
              <IconBrandFacebook />
            </button>
            <button class="btn btn-outline-warning btn-icon">
              <IconBrandInstagram />
            </button>
            <button class="btn btn-outline-warning btn-icon">
              <IconBrandYoutubeFilled />
            </button>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mt-4 mt-md-0">
          <h5 class="footer-sub">Navigation</h5>

          <div class="row mt-4">
            <div
              class="col-12 col-md-6"
              v-for="nav in navigationList"
              :key="nav.title"
            >
              <a :href="nav.link" class="nav-footer-menu">
                {{ nav.title }}
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mt-4 mt-md-0">
          <h5 class="footer-sub">Contact</h5>

          <div class="row mt-4">
            <div class="col-12 d-flex gap-2">
              <IconMail style="stroke: #e77e23; flex-shrink: 0" />
              <p class="fw-semibold" style="color: #4d4d4d">
                phd.wakuwaku@mail.com
              </p>
            </div>

            <div class="col-12 d-flex gap-2">
              <IconPhone style="stroke: #e77e23; flex-shrink: 0" />
              <p class="fw-semibold" style="color: #4d4d4d">+62848477102943</p>
            </div>

            <div class="col-12 d-flex gap-2">
              <IconBrandWhatsapp style="stroke: #e77e23; flex-shrink: 0" />
              <p class="fw-semibold" style="color: #4d4d4d">+628184938494</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mt-4 mt-md-0">
          <h5 class="footer-sub">Location</h5>

          <div class="row mt-4">
            <div class="col-12 d-flex gap-2">
              <IconMapPin style="stroke: #e77e23; flex-shrink: 0" />
              <p class="fw-semibold" style="color: #4d4d4d">
                Kerobokan <br />
                <span class="fw-medium" style="font-size: 14px"
                  >Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod,
                  Kec. Kuta Utara, Kabupaten Badung, Bali 80361
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block text-center current-footer py-4">
      <h6>
        Copyright © {{ currentYear }} <span>PHD わくわく</span>. All Rights
        Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy
      </h6>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  </footer>
</template>

<script setup>
import {
  IconPhone,
  IconMapPin,
  IconBrandWhatsapp,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutubeFilled,
} from "@tabler/icons-vue";

const currentYear = new Date().getFullYear();

const navigationList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Order",
    link: "/order",
  },
  {
    title: "Login",
    link: "/login",
  },
  {
    title: "Register",
    link: "/register",
  },
];
</script>

<style scoped>
.nav-footer {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.05em;
}

.nav-footer span,
.nav-footer-secondary,
.footer-sub {
  color: #e77e23;
}

.nav-footer-secondary {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
}

.nav-footer-menu {
  font-size: 1rem;
  font-weight: 500;
  color: #4d4d4d;
  letter-spacing: -0.02em;
  display: block;
  margin-bottom: 1rem;
}

.footer-sub {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.current-footer {
  border-top: 1px solid #e5e5e5;
}

.current-footer h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #333;
  line-height: 1.5;
}

.current-footer h6 span {
  text-decoration: underline;
  cursor: default;
}

.current-footer p {
  font-size: 0.5rem;
  color: #333;
  margin-top: 0.5rem;
  font-weight: 500;
}

@media (min-width: 768px) {
  .current-footer h6 {
    font-size: 1rem;
  }

  .current-footer p {
    font-size: 0.875rem;
  }
}

.btn-icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

@media (max-width: 767px) {
  .row {
    flex-direction: column;
  }

  .nav-footer {
    font-size: 1.5rem;
  }

  .footer-sub {
    font-size: 1.125rem;
  }

  .nav-footer-menu {
    font-size: 0.875rem;
  }

  .current-footer h6 {
    font-size: 0.75rem;
  }

  .current-footer p {
    font-size: 0.5rem;
  }
}
</style>

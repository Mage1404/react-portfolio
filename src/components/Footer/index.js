import React from "react";

function Footer() {
  const blank = "_blank";
  return (
    <footer class="text-center">
      <a class="mr-5" href="https://github.com/Mage1404" target={blank}>
        <i class="fa fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/luyan-zhang-327495211/"
        class="mr-5"
        target={blank}
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100004302903575"
        target={blank}
      >
        <i class="fa fa-facebook"></i>
      </a>
      <p>By Luyan Zhang</p>
      &copy; 2022
    </footer>
  );
}

export default Footer;

<template>
  <header class="header vertical-align">
    <div class="header-navbar">
      <div class="logo">
        <img id="logo-img" src="@/assets/tomato.png" />
        <div class="vertical-align">
          <div class="logo-text">PomPom</div>
        </div>
      </div>
      <div class="vertical-align">
        <div class="login-button">Log in</div>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style>
.header {
  height: 80px;
  padding: 0 25px;
  box-shadow: 0px 2px 10px #afafaf29;
}

.header-navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.vertical-align {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  display: flex;
}

#logo-img {
  width: 40px;
  height: 40px;
}

.logo-text {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 900;
}
</style>
<template>
  <ul>
    <li><div class="icon"><icon icon="wrench"/></div><p class="label">General</p></li>
    <li><div class="icon"><icon icon="users"/></div><p class="label">Members</p></li>
    <li><div class="icon"><icon icon="key"/></div><p class="label">API Key</p></li>
    <li><div class="icon"><icon icon="branch"/></div><p class="label">Webhooks</p></li>
    <li><div class="icon"><icon icon="credit-card"/></div><p class="label">Billing</p></li>
  </ul>
</template>

<script>
import Icon from '../Icon'

export default {
  name: 'SettingsMenu',
  components: {
    Icon
  }
}
</script>

<style lang="postcss">
ul {
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 191px;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  height: 2.5625rem;
  list-style-type: none;
  justify-content: flex-start;
  width: 100%;

  &:hover {
    background-color: var(--purple);
    border-radius: 4px;

    & .label {
      color: #fff;
    }
  }

  & .icon {
    display: flex;
    justify-content: center;
    flex: 0 0 4.5rem;
  }

  & .label {
    display: flex;
    flex: 1 1 auto;
    color: var(--darkPurple);
    font-size: 0.8125rem;
    margin: 0;
    text-align: center;
  }
}
</style>

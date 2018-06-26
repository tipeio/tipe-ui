<template>
  <ul>
    <li class="first"><div class="icon"><icon icon="wrench"/></div><p class="label">General</p></li>
    <li><div class="icon"><icon icon="users"/></div><p class="label">Members</p></li>
    <li><div class="icon"><icon icon="key"/></div><p class="label">API Key</p></li>
    <li><div class="icon"><icon icon="branch"/></div><p class="label">Webhooks</p></li>
    <li class="last"><div class="icon"><icon icon="credit-card"/></div><p class="label">Billing</p></li>
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
  height: 18.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  border: 1px #e7e9ea solid;
  border-radius: 4px;
}
li {
  display: flex;
  align-items: center;
  height: 3.625rem;
  list-style-type: none;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #e7e9ea;

  &:hover {
    background-color: var(--purple);

    & .label {
      color: #fff;
    }

    &.first {
      border-radius: 4px 4px 0 0;
    }
    &.last {
      border-radius: 0 0 4px 4px;
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

  &.last {
    border-bottom: none;
  }
}
</style>

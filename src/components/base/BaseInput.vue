<template>
  <div class="form-group row">
    <label v-if="label">{{ label }}</label>
    <input :value="value" class="form-control" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue() {
      this.$emit('input', event.target.value)
    }
  }
};
</script>

<style>
</style>
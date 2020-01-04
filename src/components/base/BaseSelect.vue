<template>
  <div class="form-group row">
    <label v-if="label">{{ label }}</label>
    <select :value="value" class="form-control" @input="updateValue" v-bind="$attrs">
      <template v-if="!customOptions">
        <option v-for="(op,index) in listOption" :key="index" :value="op">{{op}}</option>
      </template>
      <template>
        <slot></slot>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number],
    listOption: {
      type: Array,
      default: () => [],
      validator: () => {
        return true;
      }
    },
    customOptions: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue() {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

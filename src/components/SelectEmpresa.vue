<script setup>
import { reactive, ref } from "vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
const selectOptions = [
  { id: 1, label: "Business development" }
];

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "",
  department: selectOptions[0],
  subject: "",
  question: "",
});

</script>
<template>
    <div class="w-full px-10 mt-2">
        <FormField>
          <FormControl v-model="form.department" :options="selectOptions" />
        </FormField>
    </div>
</template>
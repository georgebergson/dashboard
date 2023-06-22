<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import Logo from "@/components/Logo.vue";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});

const router = useRouter();

const submit = () => {
  router.push("/dashboard");
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="ghiper">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <div class="w-1/2 flex justify-center mx-auto pb-5"><Logo/></div>
        <FormField label="E-mail" help="Insira seu email cadastrado">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Insira sua senha">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

       

        <footer  class="flex justify-between">
          <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Lembrar"
          :input-value="true"
        />
           <BaseButton type="submit" color="verde" label="Acessar o Sistema" />
        </footer>
           
       
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>

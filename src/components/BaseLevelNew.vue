<script>
import { h, defineComponent } from "vue";

export default defineComponent({
  name: "BaseLevel",
  props: {
    mobile: Boolean,
    type: {
      type: String,
      default: "justify-between",
    },
  },
  render() {
    const parentClass = [this.type, ""];

    const parentMobileClass = [""];

    const parentBaseClass = ["flex", "md:flex"];

    const childBaseClass = ["", "items-center", "justify-center"];

    return h(
      "div",
      {
        class: parentClass.concat(
          this.mobile ? parentMobileClass : parentBaseClass
        ),
      },
      this.$slots.default().map((element, index) => {
        const childClass =
          !this.mobile && this.$slots.default().length > index + 1
            ? childBaseClass.concat(["mb-0", "md:mb-0"])
            : childBaseClass;

        return h("div", { class: childClass }, [element]);
      })
    );
  },
});
</script>

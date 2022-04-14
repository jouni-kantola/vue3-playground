import { ref } from "vue";

export function useFetchBlob(url: string) {
  const blob = ref<string>();
  const error = ref(null);

  const request = new Request(url);

  fetch(request)
    .then(async response => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (reader.result) blob.value = reader.result as string;
      });
      reader.readAsDataURL(await response.blob());
    })
    .catch(err => (error.value = err));

  return { blob, error };
}

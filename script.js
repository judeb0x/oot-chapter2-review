<script>
const easinessSelect = document.getElementById('easiness');
const whyForEasiness = document.getElementById('why-for-easiness');
easinessSelect.addEventListener('change', () => {
  const selectedValue = easinessSelect.value;
  if (selectedValue === 'so-so' || selectedValue === 'a bit difficult' || selectedValue === 'very difficult') {
    whyForEasiness.required = true;
  } else {
    whyForEasiness.required = false;
  }
});
</script>

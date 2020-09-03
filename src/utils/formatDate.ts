const formatDate = (date: Date): string =>
  Intl.DateTimeFormat("pt-BR", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);

export default formatDate;

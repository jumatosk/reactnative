import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const format = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

export default format;

import { updateHeader } from 'components/header/header-component';
import { createOpinions } from 'components/opinions/opinions-component';
import 'styles/main.scss';

updateHeader({ title: 'pinions', active: 'opinion' });
createOpinions();
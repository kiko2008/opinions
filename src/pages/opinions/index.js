import { updateHeader } from 'components/header/header-component';
import { createOpinions, updateOpinions } from 'components/opinions/opinions-component';
import 'styles/main.scss';
import PubSub from 'pubsub-js';

updateHeader({ title: 'pinions', active: 'home' });
createOpinions();

PubSub.subscribe('reload', () => {
  updateOpinions();
  document.getElementById('modal').classList.add('hidden');
});

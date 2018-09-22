import { appendComponent } from 'utils/utils';
import { createOpinion } from 'components/opinion/opinion-component';
import OpinionService from 'services/opinion-service';


const loadOpinions = (opinionsJson, opinions) => {
  const updatedOpinions = opinions;
  if (opinionsJson.length === 0) {
    updatedOpinions.innerHTML = '<p class="important">No hay ninguna opinion!!</p>';
  } else {
    appendComponent(updatedOpinions,
      opinionsJson.map(opinionData => createOpinion(opinionData)));
  }
};

export const updateOpinions = () => {
  const opinionsServiceInstance = new OpinionService();
  const opinions = document.getElementById('opinions');
  opinions.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  opinionsServiceInstance.getOpinions().then((opinionsJson) => {
    opinions.innerHTML = '';
    loadOpinions(opinionsJson, opinions);
  }).catch(() => {
    opinions.innerHTML = '<p class="important">Uppssss, error!!</p>';
  });
};

export const createOpinions = () => {
  const opinionServiceInstance = new OpinionService();
  const opinions = document.getElementById('opinions');
  updateOpinions();

  return opinions;
};

export default createOpinions;

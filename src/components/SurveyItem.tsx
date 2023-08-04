import styled from 'styled-components';
import Bar from './Bar';
import { SurveyType } from './SurveyChart';

interface SurveyItemType {
  data: { [key: string]: number };
  survey: SurveyType;
  toggleFilter: (questionIndex: string, itemIndex: number) => void;
  selectedItem: number | null;
}

const SurveyItem: React.FC<SurveyItemType> = (props) => {
  let total = Object.values(props.data).reduce((a, b) => Number(a) + Number(b), 0) as number;
  return (
    <div className="SurveyItem">
      <Question>
        Q{props.survey.no + 1}. {props.survey.question}
      </Question>
      <div>
        {props.survey.items.map((item: string, index: number) => {
          let percent = props.data.hasOwnProperty(index)
            ? ((props.data[index] / total) * 100).toFixed(1)
            : 0;
          return (
            <Bar
              key={`bar-item-${index}`}
              percent={Number(percent)}
              itemValue={item}
              count={props.data[index]}
              handleClickBar={() => {
                props.toggleFilter(String(props.survey.no - 1), index);
              }}
              isSelected={props.selectedItem === index}
            />
          );
        })}
      </div>
    </div>
  );
};

const Question = styled.div`
  font-weight: 500;
  font-size: 1.03em;
  padding: 25px 0 8px 0;
  text-align: left;
`;

export default SurveyItem;

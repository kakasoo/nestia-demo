import { Entity, Column } from 'typeorm';
import { CommonCloumns } from '../common/common-columns';

export type DecodedUserToken = Pick<
  UserEntity,
  'id' | 'name' | 'nickname' | 'email' | 'birth'
>;

@Entity({ name: 'user' })
export class UserEntity extends CommonCloumns {
  /**
   * 이름 칼럼으로 사용자의 이름을 의미
   * @minLength 1
   * @maxLength 50
   */
  @Column({ length: 50, select: false })
  public name!: string;

  /**
   * 사용자의 별칭, 설정하지 않는 경우도 있다.
   * @minLength 1
   * @maxLength 50
   */
  @Column({ length: 50 })
  public nickname!: string;

  /**
   * 사용자의 프로필 이미지
   */
  @Column('text', { nullable: true, select: false })
  public profileImage?: string | null;

  /**
   * 사용자의 전화번호로 동일한 값은 없으며, 미입력된 계정 둘의 전화번호가 같을 경우 계정 통합을 요구할 예정
   * @minLength 11
   * @maxLength 13
   */
  @Column('text', { nullable: true, unique: true, select: false })
  public phoneNumber!: string;

  /**
   * 사용자의 이메일 주소로 로그인 시 필요
   * @format email
   * @minLength 4
   * @maxLength 50
   */
  @Column({ nullable: true, unique: true, select: false })
  public email!: string;

  /**
   * 사용자의 비밀번호로 로그인 시 필요
   */
  @Column({ select: false })
  public password!: string;

  /**
   * 사용자의 생일을 의미하는 값
   *
   * @pattern ^(19\d{2}|2\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
   */
  @Column('timestamp with time zone', { nullable: true, select: false })
  public birth?: string | null;

  /**
   * 사용자의 성별로 true면 남자라고 가정한다.
   */
  @Column('boolean', { nullable: true, select: false })
  public gender?: boolean | null;

  /**
   * 회원 가입 시 받는 값으로 수신 거부 가능
   */
  @Column('boolean', {
    select: false,
    default: false,
    comment: 'sms 광고 수신 동의',
  })
  public smsAdsConsent!: boolean;

  /**
   * 회원 가입 시 받는 값으로 수신 거부 가능
   */
  @Column('boolean', {
    select: false,
    default: false,
    comment: 'email 광고 수신 동의',
  })
  public emailAdsConsent!: boolean;

  /**
   * 유저의 탈퇴 여부를 의미한다.
   */
  @Column({ select: false, default: false })
  public status!: boolean;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  // add a column that links to the index table
  //@Column({ nullable: true })
  //indexId: number;

  // store json
  @Column({ type: 'json', nullable: true })
  json: any;

  @CreateDateColumn({ default: () => Date.now() })
  created: number;

  @UpdateDateColumn({ default: () => Date.now() })
  updated: number;
}
